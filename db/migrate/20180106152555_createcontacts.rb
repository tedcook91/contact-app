class Createcontacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.text :firstName, null: false
      t.text :lastName, null: false
      t.text :emailAddress, null: false
      t.text :phoneNumber, null: false
      t.text :companyName, null: false

      t.timestamps null: false
    end
  end
end
