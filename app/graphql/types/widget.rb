class Types::Widget < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: false
  field :category, Types::Category, null: false
end
