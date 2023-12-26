#include<ESP8266WiFi.h>   
#include <ESP8266WebServer.h>

#define WIFI_SSID "Django"        
#define WIFI_PSWD "123456789" 

ESP8266WebServer server(80);

const int relayPin1 = 2;
const int relayPin2 =0;
void handleRoot() {
  // Display the HTML web page with buttons to control the relay
  String html = "<html><body>";
  html += "<h1>WebMos D1 R1 Relay Control</h1>";
  html += "<p><a href='/on'>Turn On</a></p>";
  html += "<p><a href='/off'>Turn Off</a></p>";
  html += "</body></html>";

  server.send(200, "text/html", html);
}

void handleOn1() {
  // Turn on the relay
  digitalWrite(relayPin1, LOW);

  // Send response to the client
  server.send(200, "text/plain", "Relay turned on");
}
void handleOn2() {
  // Turn on the relay
  digitalWrite(relayPin2, LOW);

  // Send response to the client
  server.send(200, "text/plain", "Relay turned on");
}
void handleOff1() {
  // Turn off the relay
  digitalWrite(relayPin1, HIGH);

  // Send response to the client
  server.send(200, "text/plain", "Relay turned off");
}
void handleOff2() {
  // Turn off the relay
  digitalWrite(relayPin2, HIGH);

  // Send response to the client
  server.send(200, "text/plain", "Relay turned off");
}
void setup() {
  pinMode(relayPin1, OUTPUT);
  pinMode(relayPin2, OUTPUT);
  digitalWrite(relayPin1, LOW); 
  digitalWrite(relayPin2, LOW); 
  Serial.begin(115200);         




 Serial.println(" ");
 WiFi.begin(WIFI_SSID, WIFI_PSWD);    
 Serial.print(" Connecting to ");
 Serial.print(WIFI_SSID);
 Serial.println(" .....");
 
 int i = 0;
 while(WiFi.status() != WL_CONNECTED){
  delay(600);
  i++;
  Serial.print(i);
  Serial.print(" ");
 }
  Serial.println(" ");
  Serial.println("Connected: ");
  Serial.print("Ip Address:  ");
  Serial.println(WiFi.localIP());
  Serial.println();
// Initialize relay to OFF state
  server.on("/", HTTP_GET, handleRoot);
  server.on("/on1", HTTP_GET, handleOn1);
  server.on("/off1", HTTP_GET, handleOff1);
  server.on("/on2", HTTP_GET, handleOn2);
  server.on("/off2", HTTP_GET, handleOff2);

  // Start server
  server.begin();
  Serial.println("HTTP server started");
}



void loop() {
  // put your main code here, to run repeatedly:
 server.handleClient();
}

