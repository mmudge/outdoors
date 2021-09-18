class PagesController < ApplicationController
  def home
    result = Schema.execute(
      params[:query],
      variables: params[:variables],
      context: { current_user: nil },
    )

    render json: result
  end
end
