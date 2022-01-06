<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<table id="moviesTable" border="1" class="table table-hover tbl_code_with_mark">
    <thead>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Studio</th>
            <th>Year</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
            <xsl:for-each select="//Movie">
            <tr>
                <td><xsl:value-of select="Title"/></td>
                <td><xsl:value-of select="Genre"/></td>
                <td><xsl:value-of select="Director"/></td>
                <td><xsl:value-of select="Studio"/></td>
                <td><xsl:value-of select="Year"/></td>
                <td><button class="deleteBtn">Delete</button><td>
            </tr>
        </xsl:for-each>
    </tbody>
</table>
</xsl:template>
</xsl:stylesheet>