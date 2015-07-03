class Slide < ActiveRecord::Base

  def self.upload(slide)
    name = slide['image'].original_filename
    directory = "app/assets/images/slide"
  # create the file path
    path = File.join(directory, name)
  # write the file
    File.open(path, "wb") { |f| f.write(slide['image'].read) }
  end
end