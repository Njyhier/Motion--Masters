export class Bike {
  id!: number;
  name!: string;
  serialNumber!: string;
  brand!: string;
  model!: string;
  category!: 'road' | 'mountain' | 'hybrid' | 'electric';

  frameSize?: string;
  frameMaterial?: string;
  wheelSize?: number;
  gearCount?: number;
  brakeType?: string;
  color?: string;

  hourlyRate?: number;
  dailyRate?: number;
  depositAmount?: number;
  currency?: string;
  sellingPrice!: number;

  status?: 'available' | 'hired' | 'maintenance' | 'retired';
  isAvailable?: boolean;
  currentLocation?: string;

  condition?: 'new' | 'good' | 'fair' | 'damaged';
  lastServiceDate?: Date;
  nextServiceDue?: Date;
  reviews!: string;
  images?:string[];
}
