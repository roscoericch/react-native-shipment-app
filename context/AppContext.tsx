// context/AppContext.tsx
import { shipment, shipment_status } from '@/types';
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface AppContextType {
  username: string;
  setUsername: (username: string) => void;
  shipments:Partial<shipment>[],
  setShipments: (shipment:Partial<shipment>[]) => void;
  selectedItems: string[];
  updateSelectedItems: (items:string[]) => void;
  shipmentStatus: Partial<shipment_status>[];
  updateShipmentStatus: (items:Partial<shipment_status>[]) => void;
}

export const AppContext = createContext<AppContextType>({username:"",setUsername:()=>{},shipments:[], setShipments:()=>{}, selectedItems:[], updateSelectedItems:()=>{}, shipmentStatus:[], updateShipmentStatus:()=>{},});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState('');
  const [shipments, setShipments] = useState<Partial<shipment>[]>([]);
  const [shipmentStatus, setShipmentStatus] = useState<Partial<shipment_status>[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const updateShipment = (shipments:Partial<shipment>[]) => {
    setShipments(shipments);
  }
  const updateSelectedItems = (items:string[]) => {
    setSelectedItems(items);
  };
  const updateShipmentStatus = (items:Partial<shipment_status>[]) => {
    setShipmentStatus(items);
  };
  useEffect(()=>{
    setSelectedItems((prev)=>{
      return [...prev.filter((e)=> shipments.find((item) => item?.name === e))]
    })
  },[shipments])
  return (
    <AppContext.Provider value={{ username, setUsername, shipments, setShipments:updateShipment, updateSelectedItems, selectedItems, updateShipmentStatus, shipmentStatus }}>
      {children}
    </AppContext.Provider>
  );
};
