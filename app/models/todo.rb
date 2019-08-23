class Todo < ApplicationRecord
    validates :text, presence: true
    validates :description, presence: true
end
