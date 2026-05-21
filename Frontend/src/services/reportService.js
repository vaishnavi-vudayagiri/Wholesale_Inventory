import api from './api';

export const reportService = {
  getSalesReport: () => api.get('/reports/sales'),
  getStockReport: () => api.get('/reports/stock'),
  getLowStock: () => api.get('/reports/low-stock'),
};