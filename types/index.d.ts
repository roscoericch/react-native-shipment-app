import { TextInputProps } from "react-native";

export interface LoginValue {
    usr:string,
    pwd:string
}

export interface iconProps {
    color: string
};

export interface FloatingLabelInputProps extends TextInputProps {
    label: string;
}

export interface SearchInputProps extends TextInputProps {
    onQuery: (value:string) => void
}

export interface shipment {
    name: string;
    owner: string;
    docstatus: number;
    idx: number;
    sender: string;
    origin_city: string;
    sender_phone?: string; 
    sender_name: string;
    origin_address_line_1?: string;
    origin_country: string;
    sender_address?: string; 
    origin_address_line2?: string; 
    origin_state: string;
    consignee: string;
    destination_area?: string; 
    destination_city: string;
    consignee_phone?: string; 
    consignee_name?: string; 
    destination_address_line_1?: string; 
    destination_country: string;
    consignee_address?: string; 
    destination_address_line_2?: string; 
    destination_state: string;
    origin_zone: string;
    destination_zone: string;
    service?: string; 
    total_weight: number;
    status: string;
    movable_units?: string; 
    amended_from?: string; 
    company: string;
    cod: number;
    total_cod: number;
    barcode: string;
    branch?: string; 
    currency: string;
    pieces: number;
    not_available: number;
    percentage: number;
    total_fees: number;
    awb_terms_template?: string; 
    awb_terms_and_conditions?: string; 
    sales_invoice_created: number;
    _user_tags?: string[]; 
    _comments?: string[]; 
    _assign?: string; 
    _liked_by?: string[]; 
    geolocation_evkp?: any;
    shipping_service: string;
    delivery_time?: string;
    from_client_side: number;
    destination_branch?: string;
    origin_branch?: string;
    delivery_due_date?: string;
    company_currency: string;
    exchange_rate: number;
    overdue: number;
    posting_date: string;
    posting_time: string;
    is_returned: number;
    custodian?: string;
    assignee?: string;
    closed: number;
    custodian_commission: number;
    awb_date: string;
    type?: string;
    origin_address_line_1?: string;
    service_type?: string;
    adjusted_cod: number;
}

export interface shipment_status {
    name: string;
    creation: string;
    modified: string;
    modified_by: string;
    owner: string;
    docstatus: number;
    idx: number;
    status: string;
    color: string;
    _user_tags?: string[] | null;
    _comments?: string[] | null;
    _assign?: string | null;
    _liked_by?: string[] | null;
}
  