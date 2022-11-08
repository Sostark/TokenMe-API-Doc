# TokenMe Data Flow

The TokenMe system continuously generates <span class="mono">TTL</span> (Token:Time:Location) data or records, and stores these records in a central database, and exposes this data in several formats on the API-server.

Diagram of the Data-flow:

<img src="img/Sostark-TokenMe-dataflow-v1.0.svg" /> <br>
View image in separate window: <a href="./img/Sostark-TokenMe-dataflow-v1.0.svg" target="_blank">Sostark-TokenMe-dataflow-v1.0.svg</a>

In this diagram there is a LoRaWAN-server depicted that collects all "anchor-records" from a site. This is however only one of the datacommunication scenarios, where another is local WiFi and a direct VPN-tunnel upload from the Basestation to the Cloud-server. <br>
In either case there is no difference in the collected TTL data itself, other than the update frequency and therefor quantity of data, considering that LoRaWAN has limited bandwidth compared to WiFi.

## Anchor Data Upload

TokenMe support 3 methods for an Anchor to upload/publish its TTL (Token-Time-Location) data:

1. REST-API/HTTP-POST
2. LoraWAN-publish
3. MQTT-publish (not yet implemented)

### Anchor-upload via HTTP-POST

https://cloud52.sostark.nl/code/75114096/dashboard/api/reports
