import React from 'react';
import { Collapsible } from '../Collapsible';
import { AppContext } from '@/context/AppContext';
import { shipment } from '@/types';
import { render } from '@testing-library/react-native';

const mockContextValue = {
    username:"",setUsername:()=>{},shipments:[], setShipments:()=>{}, selectedItems:[], updateSelectedItems:()=>{}, shipmentStatus:[], updateShipmentStatus:()=>{}
};

describe('Collapsible Component', () => {
  const item:shipment = {
    name: "210173066689",
    "owner": "omar.sherif@smsaexpress.com",
    "docstatus": 1,
    "idx": 0,
    "sender": "EG1155",
    "origin_city": "CAIRO",
    "sender_phone": null,
    "sender_name": "BBUSINESS FOR DEVELOPMENT",
    "origin_adress_line_1": null,
    "origin_country": "Egypt",
    "sender_address": null,
    "origin_address_line2": null,
    "origin_state": "CAIRO",
    "consignee": "Default Consignee",
    "destination_area": null,
    "destination_city": "CAIRO",
    "consignee_phone": null,
    "consignee_name": null,
    "destination_address_line_1": null,
    "destination_country": "Egypt",
    "consignee_address": null,
    "destination_address_line_2": null,
    "destination_state": "CAIRO",
    "origin_zone": "Dom 1",
    "destination_zone": "Dom 1",
    "service": null,
    "total_weight": 0.5,
    "status": "New ShipmentTT",
    "movable_units": null,
    "amended_from": null,
    "company": "SMSA EXPRESS",
    "cod": 0.0,
    "total_cod": 0.0,
    "barcode": "210173066689",
    "branch": null,
    "currency": "EGP",
    "pieces": 1,
    "not_available": 0,
    "percentage": 0.0,
    "total_fees": 0.0,
    "awb_terms_template": null,
    "awb_terms_and_conditions": null,
    "sales_invoice_created": 0,
    "_user_tags": null,
    "_comments": null,
    "_assign": null,
    "_liked_by": null,
    "geolocation_evkp": null,
    "shipping_service": "Domestic - Corporate",
    "delivery_time": null,
    "from_client_side": 0,
    "destination_branch": null,
    "origin_branch": null,
    "delivery_due_date": null,
    "company_currency": "EGP",
    "exchange_rate": 1.0,
    "overdue": 0,
    "posting_date": "2023-12-31",
    "posting_time": "17:08:52.979889",
    "is_returned": 0,
    "custodian": null,
    "assignee": null,
    "closed": 0,
    "custodian_commission": 0.0,
    "awb_date": "2023-12-06",
    "type": null,
    "origin_address_line_1": null,
    "service_type": null,
    "adjusted_cod": 0.0
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <AppContext.Provider value={mockContextValue}>
        <Collapsible item={item} />
      </AppContext.Provider>
    );

    expect(getByText('AWB')).toBeTruthy();
    expect(getByText(item.name)).toBeTruthy();
  });
});