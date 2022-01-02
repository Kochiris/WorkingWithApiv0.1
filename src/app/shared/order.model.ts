export interface Order {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: Array<{}>;
  status: string;
  priority: string;
}
