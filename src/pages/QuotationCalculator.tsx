
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
            * { box-sizing: border-box; }
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              margin: 0; 
              padding: 40px; 
              background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
              color: #1a202c;
              line-height: 1.6;
            }
            .invoice-container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              border-radius: 16px;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
              color: white;
              padding: 40px;
              text-align: center;
              position: relative;
            }
            .header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: url('/public/Afristone-All things Stone/Afristone letterheads/W1-01.png') center/contain no-repeat;
              opacity: 0.1;
            }
            .company-logo {
              width: 80px;
              height: 80px;
              margin: 0 auto 20px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 32px;
              font-weight: bold;
              backdrop-filter: blur(10px);
              border: 2px solid rgba(255, 255, 255, 0.3);
            }
            .company-name {
              font-size: 32px;
              font-weight: 700;
              margin: 0 0 8px 0;
              letter-spacing: -0.5px;
            }
            .company-tagline {
              font-size: 16px;
              opacity: 0.9;
              margin: 0;
              font-weight: 300;
            }
            .content {
              padding: 40px;
            }
            .quotation-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 2px solid #e2e8f0;
            }
            .quotation-title {
              font-size: 28px;
              font-weight: 700;
              color: #1e40af;
              margin: 0;
            }
            .quotation-number {
              font-size: 14px;
              color: #64748b;
              background: #f1f5f9;
              padding: 8px 16px;
              border-radius: 8px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin-bottom: 40px;
            }
            .info-section h3 {
              font-size: 16px;
              font-weight: 600;
              color: #475569;
              margin: 0 0 15px 0;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .info-item {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid #f1f5f9;
            }
            .info-item:last-child {
              border-bottom: none;
            }
            .info-label {
              font-weight: 500;
              color: #64748b;
            }
            .info-value {
              font-weight: 600;
              color: #1a202c;
            }
            .items-table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              margin: 30px 0;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
            .items-table th {
              background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
              padding: 20px;
              text-align: left;
              font-weight: 600;
              color: #475569;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              font-size: 12px;
            }
            .items-table td {
              padding: 20px;
              background: white;
              border-top: 1px solid #f1f5f9;
              font-size: 14px;
            }
            .amount-cell {
              font-weight: 600;
              color: #1e40af;
            }
            .total-section {
              margin-top: 30px;
              padding: 30px;
              background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
              border-radius: 12px;
              text-align: right;
            }
            .total-line {
              display: flex;
              justify-content: space-between;
              margin: 10px 0;
              font-size: 16px;
            }
            .grand-total {
              font-size: 24px;
              font-weight: 700;
              color: #1e40af;
              padding-top: 15px;
              border-top: 2px solid #cbd5e1;
              margin-top: 15px;
            }
            .location-section {
              margin: 30px 0;
              padding: 20px;
              background: #f8fafc;
              border-radius: 12px;
              border-left: 4px solid #1e40af;
            }
            .location-title {
              font-weight: 600;
              color: #1e40af;
              margin-bottom: 8px;
            }
            .disclaimer {
              margin-top: 40px;
              padding: 25px;
              background: #fffbeb;
              border-radius: 12px;
              border: 1px solid #fbbf24;
            }
            .disclaimer h3 {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 15px;
              color: #92400e;
            }
            .disclaimer ol {
              margin: 0;
              padding-left: 20px;
            }
            .disclaimer li {
              margin-bottom: 8px;
              color: #78350f;
              font-size: 13px;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              padding: 30px;
              background: #1e40af;
              color: white;
              border-radius: 12px;
            }
            .footer-contact {
              font-size: 16px;
              font-weight: 500;
              margin-bottom: 10px;
            }
            .footer-message {
              font-size: 14px;
              opacity: 0.9;
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="invoice-container">
            <div class="header">
              <div class="company-logo">A</div>
              <h1 class="company-name">Afristone</h1>
              <p class="company-tagline">ALL THINGS STONE</p>
            </div>
            
            <div class="content">
              <div class="quotation-header">
                <h2 class="quotation-title">QUOTATION</h2>
                <div class="quotation-number">Quote #${Date.now().toString().slice(-6)}</div>
              </div>
              
              <div class="info-grid">
                <div class="info-section">
                  <h3>Quote Details</h3>
                  <div class="info-item">
                    <span class="info-label">Date:</span>
                    <span class="info-value">${format(new Date(quotationData.date), 'MMMM dd, yyyy')}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Valid Until:</span>
                    <span class="info-value">${format(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 'MMMM dd, yyyy')}</span>
                  </div>
                </div>
                
                <div class="info-section">
                  <h3>Client Information</h3>
                  <div class="info-item">
                    <span class="info-label">Client:</span>
                    <span class="info-value">${quotationData.clientName}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Location:</span>
                    <span class="info-value">${quotationData.clientLocation}</span>
                  </div>
                </div>
              </div>
              
              <div class="location-section">
                <div class="location-title">Our Location</div>
                <div>Nairobi, Kenya - Serving nationwide with quality stone finishes</div>
              </div>
              
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Product Description</th>
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
                    <td class="amount-cell">${calculateTotal().toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
              
              <div class="total-section">
                <div class="total-line grand-total">
                  <span>Total Amount:</span>
                  <span>Ksh ${calculateTotal().toLocaleString()}</span>
                </div>
              </div>
              
              <div class="disclaimer">
                <h3>Terms & Conditions</h3>
                <ol>
                  <li>Cost of logistics shall be confirmed with delivery address provided by the Customer.</li>
                  <li>For any questions about this quotation, please contact us using the telephone number below.</li>
                  <li>Prices are valid for 30 days from the date of this quotation.</li>
                  <li>All work will be completed to the highest standards of craftsmanship.</li>
                </ol>
              </div>
            </div>
            
            <div class="footer">
              <div class="footer-contact">Contact: +254 729 304 190</div>
              <p class="footer-message">Thank you for choosing Afristone for all your stone finishes.</p>
            </div>
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
                    <p className="text-sm text-muted-foreground">ALL THINGS STONE</p>
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
