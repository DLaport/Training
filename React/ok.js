var SQL = "declare @d datetime " +
		" set @d = GETDATE() " +
		" select STATUS_CAL.CHART_MONTH, STATUS_CAL.YEARCHART_MONTH, STATUS_CAL.K_OPPO_STATUS, STATUS_CAL.STATUS, STATUS_CAL.STATUS_FR, STATUS_CAL.STATUS_DE, STATUS_CAL.STATUS_ES, coalesce(NbOppo, 0) as NbOppo " +
		" from ( " +
		"    select * from " +
		"    (SELECT K_OPPO_STATUS, K_SORT, STATUS, STATUS_FR, STATUS_ES, STATUS_DE from LK_OPPO_STATUS where DISABLED = '0') as STATUS, " +
		"   (SELECT MONTH(@d) as CHART_MONTH, LEFT(CONVERT(varchar, @d,112),6) AS YEARCHART_MONTH " +
		"   union SELECT MONTH(DATEADD(month, -1, @d)) as CHART_MONTH, LEFT(CONVERT(varchar, DATEADD(month, -1, @d) ,112),6) AS YEARCHART_MONTH " +
		"   union SELECT MONTH(DATEADD(month, -2, @d)) as CHART_MONTH, LEFT(CONVERT(varchar, DATEADD(month, -2, @d) ,112),6) AS YEARCHART_MONTH " +
		"   union SELECT MONTH(DATEADD(month, -3, @d)) as CHART_MONTH, LEFT(CONVERT(varchar, DATEADD(month, -3, @d) ,112),6) AS YEARCHART_MONTH " +
		"   union SELECT MONTH(DATEADD(month, -4, @d)) as CHART_MONTH, LEFT(CONVERT(varchar, DATEADD(month, -4, @d) ,112),6) AS YEARCHART_MONTH " +
		"   union SELECT MONTH(DATEADD(month, -5, @d)) as CHART_MONTH, LEFT(CONVERT(varchar, DATEADD(month, -5, @d) ,112),6) AS YEARCHART_MONTH) as CAL " +
		") as STATUS_CAL left join ( " +
		"    SELECT STATUS, R_STATUS, LEFT(CONVERT(varchar, " + dateField + ",112),6) as YearMonth, count(OPPO.K_OPPORTUNITY) as 'NbOppo' " +
		"    FROM R_OPPORTUNITIES OPPO " +
		"    WHERE (" + dateField + "  >=  DATEADD(month, -6, DATEADD(MONTH, DATEDIFF(MONTH, 0, @d), 0)) ) "; //Take the first day of the month and remove 6 month

	if (currUser <= 0)
		SQL += " AND OPPO.MANAGER > :param1 ";
	else
		SQL += " AND OPPO.MANAGER = :param1 ";

	SQL += "    group by LEFT(CONVERT(varchar, " + dateField + ",112),6) , STATUS, R_STATUS " +
		") as TMPOPPO on TMPOPPO.STATUS = STATUS_CAL.K_OPPO_STATUS and TMPOPPO.YearMonth = STATUS_CAL.YEARCHART_MONTH " +
		"order by STATUS_CAL.K_SORT, STATUS_CAL.YEARCHART_MONTH asc";