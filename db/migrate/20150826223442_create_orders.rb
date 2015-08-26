class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :comments
      t.references :user, index: true
      t.references :item, index: true

      t.timestamps
    end
  end
end
