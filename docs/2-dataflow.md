# TokenMe Data Flow

The TokenMe system continuously generates TTL (Token:Time:Location) data or records, and stores these records in a central database, and exposes this data in several formats from the API-server.

Diagram of the Data-flow:

<img src="img/Sostark-TokenMe-dataflow-v1.0.svg" /> <br>
View image in seperate window: <a href="./img/Sostark-TokenMe-dataflow-v1.0.svg" target="_blank">Sostark-TokenMe-dataflow-v1.0.svg</a>

In this datiagram there is a LoRaWAN-server depicted that collects all "anchor-records" from a site. This is however only one of the datacommunication scenarios, where another is local WiFi and a direct VPN-tunnel upload from the Basestation to the Cloud-server. <br>
In either case there is no difference in the collected TTL data itself.
