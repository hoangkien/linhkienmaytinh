module ApplicationHelper

  def option_paginate
    options = {
      previous_label: 'Trang trước',
      next_label: 'Trang sau',

    }
  end

  def tag_cloud(tags, classes)
    max = tags.sort_by(&:count).last
    tags.each do |tag|
      index = tag.count.to_f / max.count * (classes.size - 1)
      yield(tag, classes[index.round])
    end
  end

  def self.change_alias( str )
    str= str.downcase()
    str = downcase(str)
    str= str.gsub(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/,"a")
    str= str.gsub(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/,"e")
    str= str.gsub(/ì|í|ị|ỉ|ĩ/,"i")
    str= str.gsub(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/,"o")
    str= str.gsub(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/,"u")
    str= str.gsub(/ỳ|ý|ỵ|ỷ|ỹ/,"y")
    str= str.gsub(/đ/,"d")
    str= str.gsub(/\!|\@|\%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'| |\"|\&|\#|\[|\]|\~|\$|\_/,"-")
    str= str.gsub(/-+-/,"-")
    str= str.gsub(/^\-+|\-+$/,"")
    return str
  end

  def self.downcase(str)
    Unicode.downcase(str)
  end

end
