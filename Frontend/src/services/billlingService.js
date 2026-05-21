import api from './api';

export const billingService = {
  createInvoice: (data) => api.post('/billing', data),
  getInvoice: (id) => api.get(`/billing/${id}`),
  getAllInvoices: () => api.get('/billing'),
};