function renseaCallback2(statuss) {
	var sData = [], sHtml = "";
	for (var i=0; i < statuss.length; i++){
		sHtml = '<li>';
		sHtml += '<div class="text">';
		if(statuss[i].text){
			sHtml += statuss[i].text.replace(/@(.+?)(?=\s)/g, "@<a href='http://rensea.com/$1' target='_blank'>$1</a>");
		}
		if(statuss[i].status_type == "LINK"){
			sHtml += "<a href='" + statuss[i].link_url + "' target='_blank'>" + (statuss[i].link_title||statuss[i].link_desc) + "</a>";
		}
		if(statuss[i].status_type == "PICTURE"){
			sHtml += "<a href='" + statuss[i].original_url + "' target='_blank'>图片</a>";
		}
		sHtml += '</div>';
		sHtml += '<div class="timeAndWay">';
		sHtml += statuss[i].relative_date + " 通过" + (statuss[i].source=="网站"?"人间网":statuss[i].source);
		sHtml += '</div>';
		sHtml += '</li>';
		sData.push(sHtml);
	}
	document.getElementById('microblog_list').innerHTML = sData.join("");
}