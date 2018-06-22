class Types::QueryType < Types::BaseObject
  field :widgets, [Types::Widget], null: false

  def widgets
    ::Widget.all
  end
end
