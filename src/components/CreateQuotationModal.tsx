import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Calculator, Download } from "lucide-react";
import { format } from "date-fns";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import StoneSelector from './StoneSelector';

interface QuotationItem {
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const CreateQuotationModal = ({ onQuotationCreated }: { onQuotationCreated: () => void }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    projectLocation: '',
    discount: 0,
    logisticsCost: 0
  });
  const [items, setItems] = useState<QuotationItem[]>([]);
  const [currentItem, setCurrentItem] = useState({
    productName: '',
    quantity: 0,
    unitPrice: 0,
    selectedStoneKey: ''
  });
  const [creating, setCreating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [quotationNumber, setQuotationNumber] = useState('');
  const { toast } = useToast();

  const products = {
    "tanga-yellow-stone": { name: "Tanga Yellow Stone", price: 5500 },
    "silver-stone": { name: "Silver Stone", price: 3800 },
    "half-facing-red-bricks": { name: "Half Facing Red Bricks", price: 3800 },
    "stacked-mosaic-pattern-stone": { name: "Stacked/Mosaic Pattern Stone", price: 6500 },
    "grey-stone": { name: "Grey Stone", price: 3300 },
    "army-green-stone": { name: "Army Green Stone", price: 3300 },
    "black-stone": { name: "Black Stone", price: 3300 },
    "blue-stone": { name: "Sky Blue Stone", price: 4200 }
  };

  const handleStoneSelect = (stoneKey: string) => {
    const product = products[stoneKey as keyof typeof products];
    setCurrentItem(prev => ({
      ...prev,
      selectedStoneKey: stoneKey,
      productName: product.name,
      unitPrice: product.price
    }));
  };

  const addItem = () => {
    if (!currentItem.productName || currentItem.quantity <= 0) {
      toast({
        title: "Validation Error",
        description: "Please select a product and enter a valid quantity",
        variant: "destructive",
      });
      return;
    }

    const totalPrice = currentItem.quantity * currentItem.unitPrice;
    const newItem: QuotationItem = {
      productName: currentItem.productName,
      quantity: currentItem.quantity,
      unitPrice: currentItem.unitPrice,
      totalPrice
    };

    setItems(prev => [...prev, newItem]);
    setCurrentItem({
      productName: '',
      quantity: 0,
      unitPrice: 0,
      selectedStoneKey: ''
    });
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - formData.discount + formData.logisticsCost;
  };

  const generatePreview = () => {
    if (!formData.customerName || items.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill customer details and add at least one item",
        variant: "destructive",
      });
      return;
    }

    const newQuotationNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    setQuotationNumber(newQuotationNumber);
    setShowPreview(true);
  };

  const createQuotation = async () => {
    setCreating(true);
    try {
      const subtotal = calculateSubtotal();
      const total = calculateTotal();

      // Insert quotation
      const { data: quotation, error: quotationError } = await supabase
        .from('quotations')
        .insert({
          quotation_number: quotationNumber,
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          customer_phone: formData.customerPhone,
          subtotal,
          discount: formData.discount,
          logistics_cost: formData.logisticsCost,
          total
        })
        .select()
        .single();

      if (quotationError) throw quotationError;

      // Insert quotation items
      const quotationItems = items.map(item => ({
        quotation_id: quotation.id,
        product_name: item.productName,
        quantity: item.quantity,
        unit_price: item.unitPrice,
        total_price: item.totalPrice
      }));

      const { error: itemsError } = await supabase
        .from('quotation_items')
        .insert(quotationItems);

      if (itemsError) throw itemsError;

      toast({
        title: "Success",
        description: `Quotation ${quotationNumber} created successfully`,
      });

      // Reset form
      setFormData({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        projectLocation: '',
        discount: 0,
        logisticsCost: 0
      });
      setItems([]);
      setCurrentItem({
        productName: '',
        quantity: 0,
        unitPrice: 0,
        selectedStoneKey: ''
      });
      setShowPreview(false);
      setOpen(false);
      onQuotationCreated();
    } catch (error) {
      console.error('Error creating quotation:', error);
      toast({
        title: "Error",
        description: "Failed to create quotation",
        variant: "destructive",
      });
    } finally {
      setCreating(false);
    }
  };

  const downloadPDF = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Quotation - ${formData.customerName}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; line-height: 1.4; color: #333; }
            .invoice-container { max-width: 800px; margin: 20px auto; padding: 20px; background: white; }
            .invoice-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 3px solid #8B4513; padding-bottom: 20px; }
            .company-info h1 { font-size: 28px; color: #8B4513; font-weight: bold; margin-bottom: 5px; }
            .items-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
            .items-table th { background: #8B4513; color: white; padding: 12px 8px; text-align: left; font-size: 12px; }
            .items-table td { padding: 12px 8px; border-bottom: 1px solid #ddd; font-size: 11px; }
            .totals-section { text-align: right; margin-bottom: 30px; }
            .totals { display: inline-block; background: #8B4513; color: white; padding: 15px 20px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="invoice-container">
            <div class="invoice-header">
              <div class="company-info">
                <h1>AFRISTONE</h1>
                <p>All Things Stone</p>
              </div>
              <div class="quote-info">
                <h2>QUOTATION</h2>
                <p>QUOTE #: ${quotationNumber}</p>
                <p>DATE: ${new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div class="bill-to">
              <h3>BILL TO:</h3>
              <p><strong>${formData.customerName}</strong></p>
              <p>TEL: ${formData.customerPhone}</p>
              <p>EMAIL: ${formData.customerEmail}</p>
            </div>
            <table class="items-table">
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>STONE TYPE</th>
                  <th>QTY</th>
                  <th>RATE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                ${items.map((item, index) => `
                  <tr>
                    <td>${index + 1}.</td>
                    <td>${item.productName.toUpperCase()}</td>
                    <td>${item.quantity} Sqm</td>
                    <td>KES ${item.unitPrice.toLocaleString()}</td>
                    <td>KES ${item.totalPrice.toLocaleString()}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div class="totals-section">
              <div class="totals">
                <p>Subtotal: KES ${calculateSubtotal().toLocaleString()}</p>
                <p>Discount: KES ${formData.discount.toLocaleString()}</p>
                <p>Logistics: KES ${formData.logisticsCost.toLocaleString()}</p>
                <p><strong>TOTAL: KES ${calculateTotal().toLocaleString()}</strong></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Quotation
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Quotation</DialogTitle>
        </DialogHeader>

        {!showPreview ? (
          <div className="space-y-6">
            {/* Customer Details */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold">Customer Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customerName">Customer Name *</Label>
                    <Input
                      id="customerName"
                      value={formData.customerName}
                      onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="customerPhone">Phone</Label>
                    <Input
                      id="customerPhone"
                      value={formData.customerPhone}
                      onChange={(e) => setFormData(prev => ({ ...prev, customerPhone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="customerEmail">Email</Label>
                    <Input
                      id="customerEmail"
                      value={formData.customerEmail}
                      onChange={(e) => setFormData(prev => ({ ...prev, customerEmail: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectLocation">Location</Label>
                    <Input
                      id="projectLocation"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectLocation: e.target.value }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add Items */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold">Add Items</h3>
                
                <StoneSelector
                  stones={products}
                  selectedStone={currentItem.selectedStoneKey}
                  onStoneSelect={handleStoneSelect}
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity">Quantity (M²)</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={currentItem.quantity || ''}
                      onChange={(e) => setCurrentItem(prev => ({ ...prev, quantity: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                  <div>
                    <Label>Unit Price</Label>
                    <Input value={`Ksh ${currentItem.unitPrice.toLocaleString()}`} disabled />
                  </div>
                </div>

                <Button onClick={addItem} className="w-full">Add Item</Button>
              </CardContent>
            </Card>

            {/* Items List */}
            {items.length > 0 && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Items Added</h3>
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                        <div>
                          <span className="font-medium">{item.productName}</span>
                          <span className="text-sm text-muted-foreground ml-2">
                            {item.quantity} M² × Ksh {item.unitPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Ksh {item.totalPrice.toLocaleString()}</span>
                          <Button 
                            onClick={() => removeItem(index)} 
                            variant="destructive" 
                            size="sm"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Additional Costs */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold">Additional Costs</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="discount">Discount (Ksh)</Label>
                    <Input
                      id="discount"
                      type="number"
                      min="0"
                      value={formData.discount || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, discount: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="logisticsCost">Logistics Cost (Ksh)</Label>
                    <Input
                      id="logisticsCost"
                      type="number"
                      min="0"
                      value={formData.logisticsCost || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, logisticsCost: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={generatePreview} className="w-full" size="lg">
              <Calculator className="w-4 h-4 mr-2" />
              Generate Preview
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Quotation Preview</h3>
              <div className="flex gap-2">
                <Button onClick={downloadPDF} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button onClick={createQuotation} disabled={creating}>
                  {creating ? 'Creating...' : 'Create Quotation'}
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">AFRISTONE</h2>
                  <p className="text-muted-foreground">Quotation #{quotationNumber}</p>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><strong>Customer:</strong> {formData.customerName}</p>
                    <p><strong>Phone:</strong> {formData.customerPhone}</p>
                    <p><strong>Email:</strong> {formData.customerEmail}</p>
                  </div>
                  <div className="text-right">
                    <p><strong>Date:</strong> {format(new Date(), 'MMM dd, yyyy')}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.productName} ({item.quantity} M²)</span>
                      <span>Ksh {item.totalPrice.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-1 text-right">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>Ksh {calculateSubtotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount:</span>
                    <span>-Ksh {formData.discount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Logistics:</span>
                    <span>Ksh {formData.logisticsCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>Ksh {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={() => setShowPreview(false)} variant="outline" className="w-full">
              Back to Edit
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateQuotationModal;