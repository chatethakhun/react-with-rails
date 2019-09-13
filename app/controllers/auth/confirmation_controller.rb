
module Auth
  class ConfirmationController < DeviseTokenAuth::TokenValidationsController


    def show
      self.resource = resource_class.confirm_by_token(params[:confirmation_token])
      yield resource if block_given?
      redirect_url = params[:redirect_url]
      if resource.errors.messages.empty?
        redirect_to "#{redirect_url}?message=#{:confirmed}"
      else
        redirect_to "#{redirect_url}?message=#{resource.email + " " + resource.errors.messages[:email][0]}"
      end
    end


  end
end