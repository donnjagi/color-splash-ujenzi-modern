
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Download, Calculator, FileText } from "lucide-react";
import { format } from "date-fns";

interface QuotationData {
  date: string;
  clientName: string;
  clientLocation: string;
  quantity: number;
  productType: string;
  productPrice: number;
}

const QuotationCalculator = () => {
  const [quotationData, setQuotationData] = useState<QuotationData>({
    date: format(new Date(), 'yyyy-MM-dd'),
    clientName: '',
    clientLocation: '',
    quantity: 1,
    productType: '',
    productPrice: 0,
  });

  const [showQuotation, setShowQuotation] = useState(false);

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

  const handleProductChange = (productKey: string) => {
    const product = products[productKey as keyof typeof products];
    setQuotationData(prev => ({
      ...prev,
      productType: product.name,
      productPrice: product.price
    }));
  };

  const calculateTotal = () => {
    return quotationData.quantity * quotationData.productPrice;
  };

  const generateQuotation = () => {
    if (!quotationData.clientName || !quotationData.productType) {
      alert('Please fill in all required fields');
      return;
    }
    setShowQuotation(true);
  };

  const downloadPDF = () => {
    // Create a new window with the quotation content
    const printWindow = window.open('', '_blank');
    const quotationHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Quotation - ${quotationData.clientName}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .header { text-align: center; margin-bottom: 30px; }
            .company-logo { background: #1e40af; color: white; width: 60px; height: 60px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .company-name { font-size: 24px; font-weight: bold; color: #1e40af; margin: 0; }
            .company-tagline { font-size: 14px; color: #666; margin: 0; }
            .quotation-title { font-size: 20px; font-weight: bold; margin: 30px 0 20px 0; }
            .client-info { margin-bottom: 30px; }
            .client-info div { margin-bottom: 8px; }
            .items-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .items-table th, .items-table td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            .items-table th { background-color: #f8f9fa; font-weight: bold; }
            .total-section { margin-top: 20px; text-align: right; }
            .total-line { margin: 5px 0; }
            .grand-total { font-size: 18px; font-weight: bold; color: #1e40af; }
            .disclaimer { margin-top: 40px; font-size: 12px; color: #666; }
            .disclaimer h3 { font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #333; }
            .disclaimer ol { margin-left: 20px; }
            .disclaimer li { margin-bottom: 8px; line-height: 1.4; }
            .footer { margin-top: 40px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="company-logo">A</div>
            <h1 class="company-name">Afristone</h1>
            <p class="company-tagline">Piping & Infrastructure Specialists</p>
          </div>
          
          <h2 class="quotation-title">QUOTATION</h2>
          
          <div class="client-info">
            <div><strong>Date:</strong> ${format(new Date(quotationData.date), 'MMMM dd, yyyy')}</div>
            <div><strong>Client:</strong> ${quotationData.clientName}</div>
            <div><strong>Location:</strong> ${quotationData.clientLocation}</div>
          </div>
          
          <table class="items-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price (Ksh)</th>
                <th>Amount (Ksh)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${quotationData.productType}</td>
                <td>${quotationData.quantity} M²</td>
                <td>${quotationData.productPrice.toLocaleString()}</td>
                <td>${calculateTotal().toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
          
          <div class="total-section">
            <div class="total-line grand-total">Total: Ksh ${calculateTotal().toLocaleString()}</div>
          </div>
          
          <div class="disclaimer">
            <h3>Disclaimer:</h3>
            <ol>
              <li>Cost of logistics shall be confirmed with delivery address provided by the Customer.</li>
              <li>If you have any questions about this invoice, please contact Collins Githinji, +254 729 304 190, githinjicollins@travauxlimited.com</li>
            </ol>
          </div>
          
          <div class="footer">
            <p>Contact: +254 700 123 456 | info@afristone.co.ke</p>
            <p>Thank you for choosing Afristone for your piping and infrastructure needs.</p>
          </div>
        </body>
      </html>
    `;
    
    if (printWindow) {
      printWindow.document.write(quotationHTML);
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
                <Label htmlFor="clientLocation">Client Location</Label>
                <Input
                  id="clientLocation"
                  value={quotationData.clientLocation}
                  onChange={(e) => setQuotationData(prev => ({ ...prev, clientLocation: e.target.value }))}
                  placeholder="Enter client location"
                />
              </div>

              <div>
                <Label htmlFor="productType">Product Type *</Label>
                <Select onValueChange={handleProductChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(products).map(([key, product]) => (
                      <SelectItem key={key} value={key}>
                        {product.name} - Ksh {product.price.toLocaleString()}/M²
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity">Quantity (M²)</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quotationData.quantity}
                  onChange={(e) => setQuotationData(prev => ({ ...prev, quantity: parseInt(e.target.value) || 1 }))}
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
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary-foreground font-bold text-xl">A</span>
                    </div>
                    <h2 className="text-xl font-bold text-primary">Afristone</h2>
                    <p className="text-sm text-muted-foreground">Piping & Infrastructure</p>
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
                      <span>{quotationData.clientLocation}</span>
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
                      <span>Ksh {quotationData.productPrice.toLocaleString()}</span>
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
