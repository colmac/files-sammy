BEGIN
	DELETE "CONTENT_API"."CONTENT_AUTH" WHERE SITE_SHORTNAME = 'sample-site';

	UPDATE CONTENT_API.SITE
	SET AUTH_REQUIRED=1
	    ,SVC_ACCTNAME = 'ContentApi-SampleSite-DEV'
	    ,SVC_ACCTPWD = 'VqGo0PqGnZTJL3mEEfBq8SLhoMWRNHnZerIi7c1ZYGctvV9j684hw8OpiEsAwWpan7A4upWas3hXVrG6mEVWSTCB2qOug8Zana4jJ+27DYY='
	WHERE SITE_SHORTNAME = 'sample-site';
    
	INSERT INTO CONTENT_API.CONTENT_AUTH (SITE_SHORTNAME, AUTH_TYPE, AUTH_DOMAIN)
	VALUES('sample-site', 'DOMAIN', 'doitt.nyc.gov');

	COMMIT;

END;