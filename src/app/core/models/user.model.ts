export class User {
  _id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  phone: string;

  building?: string;
  street?: string;
  state?: string;
  city?: string;
  country?: string;
  postalCode?: string;
}
