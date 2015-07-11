module Admin::LoginHelper

  def login(user)
    session[:user_id] = user.id
  end

  def logout
    session.delete(:user_id)
  end

  def current_user
    @current_user ||= Member.find(session[:user_id])
  end


end
