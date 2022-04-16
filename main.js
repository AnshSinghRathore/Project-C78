var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Hanu.jpeg", "Aadya.jpeg" , "Mamta kumari.jpeg", "Ajit kumar singh.jpeg"];
var names = ["Family Book","Ansh Singh Rathore", "Aadya Singh", "Mamta Kumari", "Ajit Kumar Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images] [];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
