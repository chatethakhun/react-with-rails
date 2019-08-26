class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_todo, only: [:show, :edit, :update, :destroy]
  respond_to :json
  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all
    respond_with @todos
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
    respond_with @todo
  end

  # GET /todos/new
  def new
    @todo = Todo.new
  end

  # GET /todos/1/edit
  def edit
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)
      if @todo.save
        render json: { status: 'Todo was successfully created.'}
      else
        render json: @todo.errors, status: :unprocessable_entity 
      end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    respond_to do |format|
      if @todo.update(todo_params)
        format.html { redirect_to @todo, notice: 'Todo was successfully updated.' }
        format.json { render :show, status: :ok, location: @todo }
      else
        format.html { render :edit }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    render json: { status: 'Todo was successfully removed.'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_params
      params.require(:todo).permit(:text, :description)
    end
end
