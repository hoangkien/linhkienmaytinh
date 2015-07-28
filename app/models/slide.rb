class Slide < ActiveRecord::Base
  attr_accessible :head,:description

  def self.upload(slide)
    name = slide['image'].original_filename
    directory = "app/assets/images"
  # create the file path
    path = File.join(directory, name)
  # write the file
    File.open(path, "wb") { |f| f.write(slide['image'].read) }
  end

end
