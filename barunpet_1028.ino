/*
 * Device: Arduino Nano 33 BLE Sense
 * Peripheral
 * The values of the integrated temperature sensor and 
 * accelerometer are sent using BLE.
 */

#include <ArduinoBLE.h>
#include <Arduino_LSM6DS3.h> //accelerometer sensor

float X=0;
float Y=0;
float Z=0;
int Xchar;

BLEService SensorService("1101");
//BLEUnsignedIntCharacteristic XChar("2101", BLERead | BLEWrite);
//BLEUnsignedIntCharacteristic YChar("2102", BLERead | BLEWrite);
//BLEUnsignedIntCharacteristic ZChar("2103", BLERead | BLEWrite);
BLEUnsignedCharCharacteristic SensorStatus("2104", BLERead | BLEWrite);

void setup() {
  //BLE.begin();
  IMU.begin();
  Serial.begin(9600); 

  if (!BLE.begin()) {
    Serial.println("BLE failed to Initiate");
    delay(500);
    while (1);
  }

  BLE.setLocalName("Arduino XYZ (peripheral)");
  BLE.setAdvertisedService(SensorService);

  SensorService.addCharacteristic(XChar);
  SensorService.addCharacteristic(YChar);
  SensorService.addCharacteristic(ZChar);
  SensorService.addCharacteristic(SensorStatus);

  BLE.addService(SensorService);

  //XChar.writeValue(X);
  //YChar.writeValue(Y);
  //ZChar.writeValue(Z);
  SensorStatus.writeValue("Initializing...");

  BLE.advertise();

  Serial.println("Bluetooth device is now active, waiting for connections...");
}

void loop() {
  BLEDevice central = BLE.central();
  if (central) {
    Serial.print("Connected to central: ");
    Serial.print("* Device MAC address: ");
    Serial.println(central.address());
    Serial.println(" ");
  
    while (central.connected()) {
      //delay(200);
      if (IMU.accelerationAvailable()) {
         IMU.readAcceleration(X, Y, Z);
      }
    
      //XChar.writeValue(X);
      //YChar.writeValue(Y);
      //ZChar.writeValue(Z);
      SensorStatus.writeValue("Calculating…");
    
      Serial.println("At Main Function");
      Serial.print("X ");
      Serial.print(X);
      Serial.print(" - Y ");
      Serial.print(Y);
      Serial.print(" - Z ");
      Serial.print(Z);
      Serial.println("");
      Serial.println("");
    }
  }

  Serial.print("Disconnected from central: ");
  delay(1000);
  Serial.println(central.address());
}
