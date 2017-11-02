class TasksController < ApplicationController
  before_action :authenticate_user

  def index
    render json: {
        tasks: @user.tasks
    }
  end

  def create
    task = @user.tasks.build(subject: params[:subject], details: params[:details])
    unless task.save
      render json: {
          errors: [
              'could not create task.'
          ]
      }, status: 500
    end

    render json: {
        task: task
    }
  end

  def destroy
    task = @user.tasks.find_by(id: params[:id])
    if task.nil?
      render json: {
          errors: [
              'token not found.'
          ]
      }, status: 404
      return
    end

    task.destroy
    render json: {
    }
  end

  private

  def authenticate_user
    @user = Token.find_by(authentication_token: params[:authentication_token]).try(:user)
    if @user.nil?
      render json: {
          errors: 'unauthorized.'
      }, status: 401
    end
  end
end
