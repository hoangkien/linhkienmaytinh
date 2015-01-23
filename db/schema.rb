# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20150122031333) do

  create_table "categories", :force => true do |t|
    t.datetime "created_at",               :null => false
    t.datetime "updated_at",               :null => false
    t.string   "name",       :limit => 45
    t.string   "name_url",   :limit => 45
  end

  create_table "catenews", :force => true do |t|
    t.string "name", :limit => 100, :null => false
  end

  create_table "ckeditor_assets", :force => true do |t|
    t.string   "data_file_name",                  :null => false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    :limit => 30
    t.string   "type",              :limit => 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], :name => "idx_ckeditor_assetable"
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], :name => "idx_ckeditor_assetable_type"

  create_table "members", :force => true do |t|
    t.string   "username"
    t.string   "password"
    t.string   "fullname"
    t.string   "birthday",       :limit => 45
    t.string   "email"
    t.integer  "indentity_card"
    t.datetime "created_at",                   :null => false
    t.datetime "updated_at",                   :null => false
    t.string   "address"
    t.string   "gender",         :limit => 45
    t.integer  "role",           :limit => 1
  end

  create_table "news", :force => true do |t|
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
    t.string   "title"
    t.text     "content"
    t.text     "description"
    t.integer  "catenews_id"
    t.integer  "member_id"
    t.string   "title_url",   :limit => 45
    t.string   "slug"
  end

  add_index "news", ["slug"], :name => "index_news_on_slug"

  create_table "products", :force => true do |t|
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
    t.string   "name"
    t.integer  "category_id"
    t.string   "product_id",  :limit => 45
    t.string   "price",       :limit => 45
    t.string   "size",        :limit => 45
    t.string   "light",       :limit => 45
    t.string   "guarantee",   :limit => 45
    t.string   "capacity",    :limit => 45
    t.string   "image",       :limit => 45
    t.string   "name_url",    :limit => 45
  end

end
