./mavenBuild.sh
./copyBuild.sh
cd /home/ubuntu/workspace/Wildbook/src/main/webapp/frontend/ && npm run build
sudo mkdir /var/lib/tomcat9/webapps/wildbook/react/ && sudo cp -r /home/ubuntu/workspace/Wildbook/src/main/webapp/frontend/build/* /var/lib/tomcat9/webapps/wildbook/react/
tail -f /var/log/tomcat9/catalina.out