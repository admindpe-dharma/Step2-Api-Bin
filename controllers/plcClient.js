import ModbusRTU from 'modbus-serial';
const client = new ModbusRTU();
client.connectRTU("/dev/ttyUSB0", { baudRate: 9600 });
client.setTimeout(150); 
export default client;