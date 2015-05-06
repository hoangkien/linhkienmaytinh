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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150209031031) do

  create_table "categories", force: :cascade do |t|
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "name",       limit: 45
    t.string   "name_url",   limit: 45
  end

  create_table "catenews", force: :cascade do |t|
    t.string "name", limit: 100, null: false
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string   "data_file_name",    limit: 255, null: false
    t.string   "data_content_type", limit: 255
    t.integer  "data_file_size",    limit: 4
    t.integer  "assetable_id",      limit: 4
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width",             limit: 4
    t.integer  "height",            limit: 4
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], name: "idx_ckeditor_assetable", using: :btree
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_ckeditor_assetable_type", using: :btree

  create_table "contacts", force: :cascade do |t|
    t.string "name",    limit: 255
    t.string "email",   limit: 255
    t.string "company", limit: 255
    t.text   "subject", limit: 65535
  end

  create_table "members", force: :cascade do |t|
    t.string   "username",       limit: 255
    t.string   "password",       limit: 255
    t.string   "fullname",       limit: 255
    t.string   "birthday",       limit: 45
    t.string   "email",          limit: 255
    t.integer  "indentity_card", limit: 4
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "address",        limit: 255
    t.string   "gender",         limit: 45
    t.integer  "role",           limit: 1
  end

  create_table "news", force: :cascade do |t|
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "title",       limit: 255
    t.text     "content",     limit: 65535
    t.text     "description", limit: 65535
    t.integer  "catenews_id", limit: 4
    t.integer  "member_id",   limit: 4
    t.string   "title_url",   limit: 45
    t.string   "slug",        limit: 255
  end

  add_index "news", ["slug"], name: "index_news_on_slug", using: :btree

  create_table "products", force: :cascade do |t|
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "name",        limit: 255
    t.integer  "category_id", limit: 4
    t.string   "product_id",  limit: 45
    t.string   "price",       limit: 45
    t.string   "size",        limit: 45
    t.string   "light",       limit: 45
    t.string   "guarantee",   limit: 45
    t.string   "capacity",    limit: 45
    t.string   "image",       limit: 45
    t.string   "name_url",    limit: 45
  end

end
