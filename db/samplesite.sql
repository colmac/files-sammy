DECLARE vGUID VARCHAR2(60);
BEGIN

    DELETE (SELECT * FROM CONTENT_API.TAG_MAP m INNER JOIN CONTENT_API.TAG g ON m.TAG_GUID=g.TAG_GUID WHERE SITE_SHORTNAME = 'sample-site');
   
	DELETE "CONTENT_API"."TAG"                   WHERE SITE_SHORTNAME = 'sample-site';    
	DELETE "CONTENT_API"."NAV_ITEM"              WHERE SITE_SHORTNAME = 'sample-site';
    DELETE "CONTENT_API"."GENERIC_CONTENT_GROUP" WHERE SITE_SHORTNAME = 'sample-site';
	DELETE "CONTENT_API"."GENERIC_CONTENT"       WHERE SITE_SHORTNAME = 'sample-site';
	DELETE "CONTENT_API"."CONTENT_AUTH"          WHERE SITE_SHORTNAME = 'sample-site';
	DELETE "CONTENT_API"."SITE"                  WHERE SITE_SHORTNAME = 'sample-site';

	INSERT INTO CONTENT_API.SITE (SITE_SHORTNAME, SITE_FULLNAME, SITE_BASEURL, SITE_OWNER, SITE_ACTIVE, SITE_STARTDATE, SITE_ENDDATE, AUTH_REQUIRED)
	VALUES('sample-site', 'Sample Site', 'NA', 'DoITT Content API Dev Team', 'Y', TIMESTAMP '2017-11-01 00:00:00.000000', TIMESTAMP '2029-12-31 00:00:00.000000', 0);

	INSERT INTO CONTENT_API.CONTENT_AUTH (SITE_SHORTNAME, AUTH_TYPE, AUTH_DOMAIN)
	VALUES('sample-site', 'DOMAIN', 'doitt.nyc.gov');

	INSERT INTO "CONTENT_API"."GENERIC_CONTENT" (IS_VISIBLE, GENERIC_CONTENT_NAME, GENERIC_CONTENT_TYPE, URL, SITE_SHORTNAME, CONTENT_TAGS, CONTENT_DESCRIPTION) 
	VALUES ('Y', 'sample', 'Public', 'sample-site', 'sample-site', 'sampletag', 'This is some sample generic content for the sample site sample page.');
		
    SELECT "CONTENT_API"."GENERIC_CONTENT".GENERIC_CONTENT_GUID INTO vGUID FROM "CONTENT_API"."GENERIC_CONTENT" WHERE SITE_SHORTNAME = 'sample-site';	

    INSERT INTO "CONTENT_API"."GENERIC_CONTENT_GROUP" (GENERIC_CONTENT_GROUP_NAME, GENERIC_CONTENT_GUID, SITE_SHORTNAME) 
	VALUES ('Sample Content Group', vGUID, 'sample-site');
	
	INSERT INTO "CONTENT_API"."NAV_ITEM" (NAV_ITEM_GENERIC_CONTENT_GUID, NAV_ITEM_PARENT_NAV_ITEM_GUID, NAV_ITEM_IS_VISIBLE, NAV_ITEM_POSITION, NAV_ITEM_OVERRIDE_NAME, SITE_SHORTNAME) 
	VALUES (vGUID, '0', 'Y', '1', 'Sample 1', 'sample-site');

	INSERT INTO "CONTENT_API"."TAG"  (TAG_GUID, SITE_SHORTNAME, TAG_VALUE)
	VALUES(vGUID , 'sample-site', 'sampletag');

	INSERT INTO "CONTENT_API"."TAG_MAP" (TAG_MAP_GUID, GENERIC_CONTENT_GUID, TAG_GUID)
    VALUES(vGUID , vGUID , vGUID);

	COMMIT;

END;


--SELECT * FROM  "CONTENT_API"."TAG_MAP" m INNER JOIN CONTENT_API.TAG g ON m.TAG_GUID=g.TAG_GUID WHERE SITE_SHORTNAME = 'sample-site'; 
--SELECT * FROM  "CONTENT_API"."TAG"  			WHERE SITE_SHORTNAME = 'sample-site';
--SELECT * FROM  "CONTENT_API"."NAV_ITEM"              	WHERE SITE_SHORTNAME = 'sample-site';
--SELECT * FROM  "CONTENT_API"."GENERIC_CONTENT_GROUP" 	WHERE SITE_SHORTNAME = 'sample-site';
--SELECT * FROM  "CONTENT_API"."GENERIC_CONTENT"       	WHERE SITE_SHORTNAME = 'sample-site';
--SELECT * FROM  "CONTENT_API"."SITE"                  	WHERE SITE_SHORTNAME = 'sample-site';
--SELECT * FROM  "CONTENT_API"."CONTENT_AUTH"          	WHERE SITE_SHORTNAME = 'sample-site';