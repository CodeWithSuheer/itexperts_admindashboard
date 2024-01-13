

export const updateInvoice = async (req, res, next) => {
    const {
      to,
      service,
      paymentStatus,
      amount,
      discount,
      customerId,
      orderId,
      dueDate,
      secondInvoiceDueDate,
    } = req.body;
  
    let updateQuery = {
      to,
      service,
      paymentStatus,
      amount,
      discount,
      customerId,
      orderId,
      dueDate,
      secondInvoiceDueDate,
    };
  
    // Remove undefined or null properties from the updateQuery
    updateQuery = Object.fromEntries(Object.entries(updateQuery).filter(([_, v]) => v != null));
  
    try {
      const filter = { /* Your filter criteria to identify the document you want to update */ };
      
      // Use updateOne or updateMany based on your use case
      const result = await MainDocument.updateOne(filter, updateQuery);
  
      if (result.nModified > 0) {
        res.status(200).json({ message: 'Invoice updated successfully' });
      } else {
        res.status(404).json({ message: 'Invoice not found' });
      }
    } catch (error) {
      console.error('Error updating invoice:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  