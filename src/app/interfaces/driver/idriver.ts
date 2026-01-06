export interface IDriver {
  driverId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;

  licenseNumber: string;
  licenseClass: string;
  licenseExpiryDate: Date;

  employmentType: 'FullTime' | 'PartTime' | 'Contract';
  status: 'Active' | 'Suspended' | 'Terminated';

  assignedVehicleId?: string;
  availabilityStatus: 'Available' | 'OnTrip' | 'Offline';

  rating: number;
  completedTrips: number;

  createdAt: Date;
  updatedAt: Date;

}

