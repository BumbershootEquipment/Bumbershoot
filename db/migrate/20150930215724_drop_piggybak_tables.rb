class DropPiggybakTables < ActiveRecord::Migration
  def change
    drop_table :piggybak_addresses
    drop_table :piggybak_countries
    drop_table :piggybak_order_notes
    drop_table :piggybak_orders
    drop_table :piggybak_payment_method_values
    drop_table :piggybak_payment_methods
    drop_table :piggybak_payments
    drop_table :piggybak_sellables
    drop_table :piggybak_shipments
    drop_table :piggybak_shipping_method_values
    drop_table :piggybak_shipping_methods
    drop_table :piggybak_states
    drop_table :piggybak_tax_method_values
    drop_table :piggybak_tax_methods
  end
end
