
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Download, Calculator, FileText, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';

interface StoneItem {
  id: string;
  stoneType: string;
  stoneName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface QuotationData {
  date: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  projectLocation: string;
}

const QuotationCalculator = () => {
  const [quotationData, setQuotationData] = useState<QuotationData>({
    date: format(new Date(), 'yyyy-MM-dd'),
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    projectLocation: '',
  });

  const [stoneItems, setStoneItems] = useState<StoneItem[]>([]);
  const [selectedStone, setSelectedStone] = useState('');
  const [quantity, setQuantity] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [logisticsCost, setLogisticsCost] = useState<number>(0);
  const [showQuotation, setShowQuotation] = useState(false);
  const [quotationNumber, setQuotationNumber] = useState('');
  const { toast } = useToast();

  // Auto-save quotation when generated
  useEffect(() => {
    if (showQuotation && quotationNumber) {
      autoSaveQuotation();
    }
  }, [showQuotation, quotationNumber]);

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

  const addStoneItem = () => {
    if (!selectedStone || quantity <= 0) {
      toast({
        title: "Validation Error",
        description: "Please select a stone type and enter quantity",
        variant: "destructive",
      });
      return;
    }

    const product = products[selectedStone as keyof typeof products];
    const newItem: StoneItem = {
      id: Math.random().toString(36).substr(2, 9),
      stoneType: selectedStone,
      stoneName: product.name,
      quantity,
      unitPrice: product.price,
      totalPrice: quantity * product.price
    };

    setStoneItems(prev => [...prev, newItem]);
    setSelectedStone('');
    setQuantity(0);
  };

  const removeStoneItem = (id: string) => {
    setStoneItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return stoneItems.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() - discount + logisticsCost;
  };

  const generateQuotation = () => {
    if (!quotationData.clientName || stoneItems.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill client name and add at least one stone item",
        variant: "destructive",
      });
      return;
    }
    
    const newQuotationNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    setQuotationNumber(newQuotationNumber);
    setShowQuotation(true);
  };

  const autoSaveQuotation = async () => {
    try {
      const subtotal = calculateTotal();
      
      // Insert quotation
      const { data: quotation, error: quotationError } = await supabase
        .from('quotations')
        .insert({
          quotation_number: quotationNumber,
          customer_name: quotationData.clientName,
          customer_email: quotationData.clientEmail,
          customer_phone: quotationData.clientPhone,
          subtotal,
          discount: 0,
          logistics_cost: 0,
          total: subtotal
        })
        .select()
        .single();

      if (quotationError) throw quotationError;

      // Insert quotation items
      const { error: itemsError } = await supabase
        .from('quotation_items')
        .insert({
          quotation_id: quotation.id,
          product_name: quotationData.productType,
          quantity: quotationData.quantity,
          unit_price: quotationData.unitPrice,
          total_price: subtotal
        });

      if (itemsError) throw itemsError;

      toast({
        title: "Auto-saved",
        description: `Quotation ${quotationNumber} saved automatically`,
      });
    } catch (error) {
      console.error('Error auto-saving quotation:', error);
      toast({
        title: "Error",
        description: "Failed to auto-save quotation",
        variant: "destructive",
      });
    }
  };

  const downloadPDF = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Quotation - ${quotationData.clientName}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; line-height: 1.4; color: #333; }
            .invoice-container { max-width: 800px; margin: 20px auto; padding: 20px; background: white; }
            
            .invoice-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 3px solid #8B4513; padding-bottom: 20px; }
            .company-info h1 { font-size: 28px; color: #8B4513; font-weight: bold; margin-bottom: 5px; }
            .company-info p { color: #6B4423; font-style: italic; margin-bottom: 15px; }
            .contact-info p { font-size: 12px; color: #666; margin-bottom: 3px; }
            
            .quote-info { text-align: right; }
            .quote-info h2 { font-size: 24px; color: #8B4513; margin-bottom: 10px; }
            .quote-info p { font-size: 12px; color: #666; margin-bottom: 3px; }
            
            .bill-to { margin-bottom: 25px; background: #F5F5DC; padding: 15px; border-left: 4px solid #8B4513; }
            .bill-to h3 { color: #8B4513; margin-bottom: 10px; font-size: 16px; }
            .bill-to p { margin-bottom: 5px; }
            
            .items-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
            .items-table th { background: #8B4513; color: white; padding: 12px 8px; text-align: left; font-size: 12px; }
            .items-table td { padding: 12px 8px; border-bottom: 1px solid #ddd; font-size: 11px; }
            .items-table tr:nth-child(even) { background: #F9F9F9; }
            
            .totals-section { text-align: right; margin-bottom: 30px; }
            .totals { display: inline-block; background: #8B4513; color: white; padding: 15px 20px; border-radius: 5px; }
            
            .footer-section { display: flex; justify-content: space-between; margin-bottom: 25px; }
            .bank-details, .payment-terms { width: 48%; }
            .bank-details h3, .payment-terms h3 { color: #8B4513; margin-bottom: 10px; font-size: 14px; border-bottom: 1px solid #8B4513; padding-bottom: 5px; }
            .bank-details p, .payment-terms p { font-size: 11px; margin-bottom: 4px; }
            
            .contact-footer { text-align: center; border-top: 2px solid #F5F5DC; padding-top: 15px; font-size: 11px; color: #666; }
            .contact-footer p { margin-bottom: 3px; }
            
            @media print { body { margin: 0; } .invoice-container { box-shadow: none; margin: 0; padding: 15px; } }
          </style>
        </head>
        <body>
          <div class="invoice-container">
            <div class="invoice-header">
              <div class="company-info">
                <img src="/afristone-logo.png" alt="Afristone Logo" style="height: 60px; width: auto; margin-bottom: 10px;">
                <h1>AFRISTONE</h1>
                <p>All Things Stone</p>
                <div class="contact-info">
                  <p>Skyrise Business Centre, Karuna Road, Westlands. 8th Floor</p>
                  <p>P.O. Box 53182-00200 Nairobi, Kenya.</p>
                  <p>+254 729 304 190</p>
                  <p>info@travauxlimited.com</p>
                  <p>afristone.co.ke</p>
                </div>
              </div>
              <div class="quote-info">
                <h2>QUOTATION</h2>
                <p>Call/whatsapp: (+254) 729 304 190</p>
                <p>QUOTE #: ${quotationNumber}</p>
                <p>DATE: ${new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div class="bill-to">
              <h3>BILL TO:</h3>
              <p><strong>${quotationData.clientName}</strong></p>
              <p>TEL: ${quotationData.clientPhone}</p>
              <p>EMAIL: ${quotationData.clientEmail}</p>
              <p>LOCATION: ${quotationData.projectLocation}</p>
            </div>

            <table class="items-table">
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>DESCRIPTION</th>
                  <th>STONE TYPE</th>
                  <th>QTY</th>
                  <th>UNIT</th>
                  <th>RATE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A.</td>
                  <td>SUPPLY & INSTALLATION</td>
                  <td>${quotationData.productType.toUpperCase()}</td>
                  <td>${quotationData.quantity}</td>
                  <td>Sqm</td>
                  <td>KES ${quotationData.unitPrice.toLocaleString()}</td>
                  <td>KES ${calculateTotal().toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            <div class="totals-section">
              <div class="totals">
                <p><strong>NET TOTAL: KES ${calculateTotal().toLocaleString()}</strong></p>
              </div>
            </div>

            <div class="footer-section">
              <div class="bank-details">
                <h3>BANK DETAILS</h3>
                <p>AC NAME: TRAVAUX LIMITED</p>
                <p>BANK NAME: NCBA BANK KENYA PLC</p>
                <p>A/C NO: 6039100019</p>
                <p>BRANCH: TRM</p>
                <p>BRANCH CODE: 07000</p>
                <p>SWIFT CODE: CBAFKENX</p>
                <p>PAYBILL: 880100</p>
              </div>
              
              <div class="payment-terms">
                <h3>PAYMENT TERMS</h3>
                <p>40% Downpayment: KES ${(calculateTotal() * 0.4).toLocaleString()}</p>
                <p>40% On mobilisation: KES ${(calculateTotal() * 0.4).toLocaleString()}</p>
                <p>20% On completion: KES ${(calculateTotal() * 0.2).toLocaleString()}</p>
              </div>
            </div>

            <div class="contact-footer">
              <p>If you have any questions about this quotation, please contact</p>
              <p>Collins Githinji, +254 729 304 190, githinjicollins@travauxlimited.com</p>
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
    <div className="min-h-screen bg-muted/50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Quotation Calculator</h1>
          <p className="text-muted-foreground">Generate custom quotations for your clients</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Quotation Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={quotationData.date}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="clientName">Client Name *</Label>
                  <Input
                    id="clientName"
                    value={quotationData.clientName}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, clientName: e.target.value }))}
                    placeholder="Enter client name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="clientPhone">Client Phone</Label>
                <Input
                  id="clientPhone"
                  value={quotationData.clientPhone}
                  onChange={(e) => setQuotationData(prev => ({ ...prev, clientPhone: e.target.value }))}
                  placeholder="Enter client phone"
                />
              </div>

              <div>
                <Label htmlFor="clientEmail">Client Email</Label>
                <Input
                  id="clientEmail"
                  value={quotationData.clientEmail}
                  onChange={(e) => setQuotationData(prev => ({ ...prev, clientEmail: e.target.value }))}
                  placeholder="Enter client email"
                />
              </div>

              <div>
                <Label htmlFor="projectLocation">Project Location</Label>
                <Input
                  id="projectLocation"
                  value={quotationData.projectLocation}
                  onChange={(e) => setQuotationData(prev => ({ ...prev, projectLocation: e.target.value }))}
                  placeholder="Enter project location"
                />
              </div>

              <StoneSelector
                stones={products}
                selectedStone={selectedStoneKey}
                onStoneSelect={handleStoneSelect}
              />

                <div>
                  <Label htmlFor="quantity">Quantity (M²)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quotationData.quantity || ''}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, quantity: parseInt(e.target.value) || 0 }))}
                    placeholder="Enter quantity"
                  />
                </div>

              <Button onClick={generateQuotation} className="w-full" size="lg">
                <FileText className="w-4 h-4 mr-2" />
                Generate Quotation
              </Button>
            </CardContent>
          </Card>

          {/* Quotation Preview */}
          {showQuotation && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Quotation Preview</span>
                  <Button onClick={downloadPDF} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <img 
                      src="/afristone-logo.png" 
                      alt="Afristone Logo" 
                      className="w-20 h-20 object-contain mx-auto mb-2"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Date:</span>
                      <span>{format(new Date(quotationData.date), 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Client:</span>
                      <span>{quotationData.clientName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Location:</span>
                      <span>{quotationData.projectLocation}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Product:</span>
                      <span>{quotationData.productType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Quantity:</span>
                      <span>{quotationData.quantity} M²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Unit Price:</span>
                      <span>Ksh {quotationData.unitPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold text-primary">
                    <span>Total:</span>
                    <span>Ksh {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotationCalculator;
