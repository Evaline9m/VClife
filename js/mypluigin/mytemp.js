<script id="mytemp" type="text/html">  
    <ul>  
        <% for(var i=0; i<data.length; i++) { %>  
            <li>  
                <span><%= data[i].username %></span>  
            </li>  
        <% } %>             
    </ul>  
</script> 