import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { ArrowLeft, Save, FileText, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface QuotationItem {
  id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

interface QuotationDetail {
  id: string;
  quotation_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  subtotal: number;
  discount: number;
  logistics_cost: number;
  total: number;
  created_at: string;
  created_by: string;
  quotation_items: QuotationItem[];
}

const AdminQuotationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quotation, setQuotation] = useState<QuotationDetail | null>(null);
  const [discount, setDiscount] = useState(0);
  const [logisticsCost, setLogisticsCost] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      fetchQuotationDetail();
    }
  }, [id]);

  const fetchQuotationDetail = async () => {
    try {
      const { data: quotationData, error: quotationError } = await supabase
        .from('quotations')
        .select('*')
        .eq('id', id)
        .single();

      if (quotationError) throw quotationError;

      const { data: itemsData, error: itemsError } = await supabase
        .from('quotation_items')
        .select('*')
        .eq('quotation_id', id);

      if (itemsError) throw itemsError;

      const quotationDetail = {
        ...quotationData,
        quotation_items: itemsData || []
      };

      setQuotation(quotationDetail);
      setDiscount(Number(quotationData.discount));
      setLogisticsCost(Number(quotationData.logistics_cost));
    } catch (error) {
      console.error('Error fetching quotation:', error);
      toast({
        title: "Error",
        description: "Failed to fetch quotation details",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateNewTotal = () => {
    if (!quotation) return 0;
    return Number(quotation.subtotal) - discount + logisticsCost;
  };

  const handleSave = async () => {
    if (!quotation) return;

    setSaving(true);
    try {
      const newTotal = calculateNewTotal();
      
      const { error } = await supabase
        .from('quotations')
        .update({
          discount,
          logistics_cost: logisticsCost,
          total: newTotal
        })
        .eq('id', id);

      if (error) throw error;

      setQuotation(prev => prev ? {
        ...prev,
        discount,
        logistics_cost: logisticsCost,
        total: newTotal
      } : null);

      toast({
        title: "Success",
        description: "Quotation updated successfully",
      });
    } catch (error) {
      console.error('Error updating quotation:', error);
      toast({
        title: "Error",
        description: "Failed to update quotation",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const downloadPDF = () => {
    if (!quotation) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Quotation - ${quotation.customer_name}</title>
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
            .totals p { margin-bottom: 5px; }
            
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
                <p>QUOTE #: ${quotation.quotation_number}</p>
                <p>DATE: ${format(new Date(quotation.created_at), 'MMM dd, yyyy')}</p>
              </div>
            </div>

            <div class="bill-to">
              <h3>BILL TO:</h3>
              <p><strong>${quotation.customer_name}</strong></p>
              <p>TEL: ${quotation.customer_phone}</p>
              <p>EMAIL: ${quotation.customer_email}</p>
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
                ${quotation.quotation_items.map((item, index) => `
                  <tr>
                    <td>${String.fromCharCode(65 + index)}.</td>
                    <td>SUPPLY & INSTALLATION</td>
                    <td>${item.product_name.toUpperCase()}</td>
                    <td>${item.quantity}</td>
                    <td>Sqm</td>
                    <td>KES ${Number(item.unit_price).toLocaleString()}</td>
                    <td>KES ${Number(item.total_price).toLocaleString()}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <div class="totals-section">
              <div class="totals">
                <p>SUBTOTAL: KES ${Number(quotation.subtotal).toLocaleString()}</p>
                <p>DISCOUNT: KES ${discount.toLocaleString()}</p>
                <p>LOGISTICS: KES ${logisticsCost.toLocaleString()}</p>
                <p><strong>NET TOTAL: KES ${calculateNewTotal().toLocaleString()}</strong></p>
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
                <p>40% Downpayment: KES ${(calculateNewTotal() * 0.4).toLocaleString()}</p>
                <p>40% On mobilisation: KES ${(calculateNewTotal() * 0.4).toLocaleString()}</p>
                <p>20% On completion: KES ${(calculateNewTotal() * 0.2).toLocaleString()}</p>
              </div>
            </div>

            <div class="contact-footer">
              <p>If you have any questions about this quotation, please contact</p>
              <p>Collins Githinji, +254 729 304 190, githinjicollins@travauxlimited.com</p>
              <p style="margin-top: 10px; font-style: italic;">Quotation created by: ${quotation.created_by || 'Unknown'}</p>
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

  if (loading) {
    return (
      <div className="min-h-screen bg-muted/50 flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!quotation) {
    return (
      <div className="min-h-screen bg-muted/50 flex items-center justify-center">
        <div>Quotation not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button onClick={() => navigate('/admin/dashboard')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex gap-2">
            <Button onClick={downloadPDF} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quotation Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Quotation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Quotation Number</Label>
                    <div className="text-lg font-semibold">{quotation.quotation_number}</div>
                  </div>
                  <div>
                    <Label>Date</Label>
                    <div>{format(new Date(quotation.created_at), 'MMM dd, yyyy')}</div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Customer Information</Label>
                  <div className="space-y-1">
                    <div><strong>{quotation.customer_name}</strong></div>
                    <div>{quotation.customer_email}</div>
                    <div>{quotation.customer_phone}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Items Table */}
            <Card>
              <CardHeader>
                <CardTitle>Quotation Items</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Unit Price</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quotation.quotation_items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.product_name}</TableCell>
                        <TableCell>{item.quantity} M²</TableCell>
                        <TableCell>Ksh {Number(item.unit_price).toLocaleString()}</TableCell>
                        <TableCell>Ksh {Number(item.total_price).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing Adjustments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="discount">Discount (Ksh)</Label>
                  <Input
                    id="discount"
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                    placeholder="Enter discount amount"
                  />
                </div>
                
                <div>
                  <Label htmlFor="logistics">Logistics Cost (Ksh)</Label>
                  <Input
                    id="logistics"
                    type="number"
                    value={logisticsCost}
                    onChange={(e) => setLogisticsCost(Number(e.target.value) || 0)}
                    placeholder="Enter logistics cost"
                  />
                </div>

                <Button onClick={handleSave} className="w-full" disabled={saving}>
                  <Save className="w-4 h-4 mr-2" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Ksh {Number(quotation.subtotal).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Discount:</span>
                  <span>-Ksh {discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Logistics:</span>
                  <span>Ksh {logisticsCost.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>Ksh {calculateNewTotal().toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuotationDetail;