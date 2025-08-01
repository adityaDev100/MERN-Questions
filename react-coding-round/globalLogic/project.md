1. Process traceability solution :

one of the most impactful project i have worked on, is process traceability solution.
actually jbm is one of a supplier of Maruti CNG cylinders, so Maruti came with a requirement that they want to trace each stage of CNG cylinder manufacturing. the objective of this project to ensure top notch quality of cylinders and enable root cause analysis in case of cylinder explosion.

After gathering all the requirements we decided to build this it as a generic solution to trace process of any production assembly line.

architecture wise this solution is mainly divided in three parts
1- Data acquisition part in which at assembly line there are multiple machines , at each machine sensors and plc are located to get machine parameters data like length, diameter and heating temperature.This data came to our system through MQTT.

2 - The main solution that is build using NextJs on frontend side and nodeJs, expressJS on backend and for database we are using mongodb. So for CNG cylinder process traceability there are total 23 stages.
At each stage a operator is using that stage dashboard , when cylinder comes physically , operator scan this cylinder then send a trigger to mqtt , then data comes from mqtt and using websockets we send this data on operator dashboard. parameter values compared with the ideal values of parameters and according to that cylinder passed to next stage , that is how we are tracing cylinder form a raw material en6try to final dispatch

3 - problem Statement - Before this solution operator used to record cylinder parameters value randomly at any stage and then prepare a cumulative report on paper in order to trace this cylinder in case of rejection during dispatch, by doing this it was difficult to achieve top notch quality and find the root cause analysis of any reject cylinder.
After integrating this solution it allow us to enable root cause analysis in case of my rejection of cylinder.

4 - VI Part - there is a visual inspection part for OCR and visual inspection of cylinder. 


