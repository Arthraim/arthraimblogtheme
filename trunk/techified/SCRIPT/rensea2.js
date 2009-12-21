/*
Author: Arthur Wang
Version: 0.4
Update: 2009/10/20
Author URI: http://www.arthraim.cn/
*/
function renseaCallback2(statuss) {
	var sData = [], sHtml = "", j = 1;
	for (var i=0; i < statuss.length; i++){
        if (statuss[i].in_reply_to_user_id != null) continue;
        if (j > 10) break;
		sHtml = '<li>';
		sHtml += '<div class="text">';
		if(statuss[i].text){
			sHtml += statuss[i].text.replace(/@(.+?)(?=\s)/g, "@<a href='http://api.renjian.com/$1' target='_blank'>$1</a>");
            sHtml += " ";
		}
		if(statuss[i].status_type == "LINK"){
			sHtml += "<a href='" + statuss[i].original_url + "' target='_blank'>" + (statuss[i].link_title||statuss[i].link_desc) + "</a>";
			if(statuss[i].thumbnail)
				sHtml += "   <a href='" + statuss[i].thumbnail + "' rel='lightbox'>[查看缩略图]</a>";
		}
		if(statuss[i].status_type == "PICTURE"){
			sHtml += "   <a href='" + statuss[i].original_url + "' rel='lightbox'>[查看图片]</a>";
		}
		sHtml += '</div>';
		sHtml += '<div class="timeAndWay">';
		sHtml += statuss[i].relative_date + " 通过" + (statuss[i].source=="网站"?"人间网":statuss[i].source);
		sHtml += '</div>';
		sHtml += '</li>';
		sData.push(sHtml);
        j = j + 1;
	}
	document.getElementById('microblog_list').innerHTML = sData.join("");
}