import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  error?: string | null;
  timestamp: string;
}

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T,
  error?: string
): Response => {
  return res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300,
    statusCode,
    message,
    data,
    error: error || null,
    timestamp: new Date().toISOString(),
  } as ApiResponse<T>);
};

export const sendSuccess = <T>(res: Response, data?: T, message: string = 'Success'): Response => {
  return sendResponse(res, 200, message, data);
};

export const sendCreated = <T>(res: Response, data?: T, message: string = 'Created'): Response => {
  return sendResponse(res, 201, message, data);
};

export const sendError = (
  res: Response,
  statusCode: number,
  message: string,
  error?: string
): Response => {
  return sendResponse(res, statusCode, message, undefined, error);
};
