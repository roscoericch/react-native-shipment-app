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
    owner: "omar.sherif@smsaexpress.com",
    docstatus: 1,
    "idx": 0,
    "sender": "EG1155",
    "origin_city": "CAIRO",
    "sender_name": "BBUSINESS FOR DEVELOPMENT",
    "origin_country": "Egypt",
    "origin_state": "CAIRO",
    "consignee": "Default Consignee",
    "destination_city": "CAIRO",
    "destination_country": "Egypt",
    "destination_state": "CAIRO",
    "origin_zone": "Dom 1",
    "destination_zone": "Dom 1",
    "total_weight": 0.5,
    "status": "New ShipmentTT",
    "company": "SMSA EXPRESS",
    "cod": 0.0,
    "total_cod": 0.0,
    "barcode": "210173066689",
    "currency": "EGP",
    "pieces": 1,
    "not_available": 0,
    "percentage": 0.0,
    "total_fees": 0.0,
    "sales_invoice_created": 0,
    "geolocation_evkp": null,
    "shipping_service": "Domestic - Corporate",
    "from_client_side": 0,
    "company_currency": "EGP",
    "exchange_rate": 1.0,
    "overdue": 0,
    "posting_date": "2023-12-31",
    "posting_time": "17:08:52.979889",
    "is_returned": 0,
    "closed": 0,
    "custodian_commission": 0.0,
    "awb_date": "2023-12-06",
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