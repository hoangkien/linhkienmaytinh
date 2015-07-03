class Admin::SlidesController < Admin::ApplicationController

  def index
    @slides = Slide.all
  end

  def new
    @slide = Slide.new
  end

  def create
    @slide = Slide.new()
    @slide.head = slide_params['head']
    @slide.description = slide_params['description']
    @slide.image = params[:slide]['image'].original_filename
    upload = Slide.upload(params[:slide])

    if @slide.save
      flash[:notice] = "Success"
      redirect_to admin_slides_path
    else
      render :new
    end
  end

  def update
  end

  def destroy
  end

  def show
  end

  def delete
  end
  
  private
  def slide_params
    params.require(:slide).permit(:head,:description)
  end
end