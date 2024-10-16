import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AppContext } from '@/context/AppContext';
import FilterPopup from '../FilterPopup';
import { shipment_status } from '@/types';

const mockShipmentStatus:shipment_status[] = [{
  "name": "New ShipmentTT",
  "creation": "2023-02-21 11:53:33.952548",
  "modified": "2024-03-21 11:43:05.485522",
  "modified_by": "Administrator",
  "owner": "ahmed.fathy@brandimic.com",
  "docstatus": 0,
  "idx": 1,
  "status": "New ShipmentTT",
  "color": "#761ACB",
  "_user_tags": null,
  "_comments": null,
  "_assign": null,
  "_liked_by": null
}];

const renderComponent = (modalVisible = true, onQuery = jest.fn()) => {
  return render(
    <AppContext.Provider value={{username:"",setUsername:()=>{},shipments:[], setShipments:()=>{}, selectedItems:[], updateSelectedItems:()=>{}, shipmentStatus:mockShipmentStatus, updateShipmentStatus:()=>{},}}>
      <FilterPopup modalVisible={modalVisible} setModalVisible={jest.fn()} onQuery={onQuery} />
    </AppContext.Provider>
  );
};

describe('FilterPopup', () => {
  it('renders correctly when visible', () => {
    const { getByText } = renderComponent();
    expect(getByText('Filters')).toBeTruthy();
    expect(getByText('Shipment Status')).toBeTruthy();
  });
});