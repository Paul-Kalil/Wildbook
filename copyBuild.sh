#!/bin/bash

echo \ * copying resources...
sudo service tomcat9 stop
sudo rm -rf /var/lib/tomcat9/webapps/wildbook* /var/lib/tomcat9/work/Catalina/localhost/wildbook*
sudo cp target/wildbook-7.0.0-EXPERIMENTAL.war /var/lib/tomcat9/webapps/wildbook.war
sudo service tomcat9 start
echo \ * copyBuild complete.
