<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html; charset=utf-8" language="java" import="org.joda.time.LocalDateTime,
org.joda.time.format.DateTimeFormatter,
org.joda.time.format.ISODateTimeFormat,java.net.*,
org.ecocean.grid.*,
org.ecocean.datacollection.*,
java.io.*,java.util.*, java.io.FileInputStream, java.io.File, java.io.FileNotFoundException, org.ecocean.*,org.ecocean.servlet.*,javax.jdo.*, java.lang.StringBuffer, java.util.Vector, java.util.Iterator, java.lang.NumberFormatException"%>

<%

String context="context0";
context=ServletUtilities.getContext(request);
Shepherd myShepherd=new Shepherd(context);



%>

<html>
<head>
<title>Remove Test Encounters...</title>

</head>

<body>
<ul>
<%

try{

	Iterator<Encounter> encIt = myShepherd.getAllEncountersNoQuery();

    while (encIt.hasNext()) {
	
       Encounter enc = encIt.next();
       //Occurrence occ  = myShepherd.getOccurrenceForEncounter(enc.getCatalogNumber());
       enc.setIndividualID(null);
       String occID = enc.getOccurrenceID();
       
       Occurrence occ = null;
       if (occID!=null&&myShepherd.isOccurrence(occID)) {
           occ = myShepherd.getOccurrence(occID);
  	   enc.setOccurrenceID(null);
       	   occ.setEncounters(null);
       }
       if (occ!=null&&occ.getEncounters().contains(enc)) {
	   occ.removeEncounter(enc);	
       }	
       enc.setOccurrenceID(null);
	try {
                myShepherd.throwAwayEncounter(enc);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
	
}
catch(Exception e){
	e.printStackTrace();
	//myShepherd.rollbackDBTransaction();
}

%>

</ul>

</body>
</html>
