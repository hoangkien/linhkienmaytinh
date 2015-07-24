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

ActiveRecord::Schema.define(version: 20150724033235) do

  create_table "categories", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.string   "name_url",   limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "parent_id",  limit: 4
    t.string   "slug",       limit: 255
  end

  create_table "catenews", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.string   "email",      limit: 255
    t.string   "company",    limit: 255
    t.text     "subject",    limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "phone",      limit: 255
  end

  create_table "infos", force: :cascade do |t|
    t.string "phone",        limit: 255
    t.string "hotline",      limit: 255
    t.string "email",        limit: 255
    t.string "skype",        limit: 255
    t.text   "company_name", limit: 65535
    t.text   "address",      limit: 65535
  end

  create_table "intros", force: :cascade do |t|
    t.text     "intro",      limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.text     "service",    limit: 65535
  end

  create_table "members", force: :cascade do |t|
    t.string   "username",        limit: 255
    t.string   "password_digest", limit: 255
    t.string   "fullname",        limit: 255
    t.string   "birthday",        limit: 255
    t.string   "email",           limit: 255
    t.integer  "indentity_card",  limit: 4
    t.string   "address",         limit: 255
    t.string   "gender",          limit: 255
    t.integer  "role",            limit: 4
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "news", force: :cascade do |t|
    t.string   "title",       limit: 255
    t.text     "content",     limit: 65535
    t.string   "description", limit: 255
    t.integer  "catenews_id", limit: 4
    t.integer  "member_id",   limit: 4
    t.string   "title_url",   limit: 255
    t.string   "slug",        limit: 255
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "products", force: :cascade do |t|
    t.string  "name",        limit: 255
    t.integer "trademak_id", limit: 4
    t.integer "category_id", limit: 4
    t.string  "image",       limit: 255
    t.integer "price",       limit: 4
    t.text    "details",     limit: 65535
    t.string  "name_url",    limit: 255
    t.string  "slug",        limit: 255
    t.string  "gurantee",    limit: 255
  end

  add_index "products", ["slug"], name: "index_products_on_slug", unique: true, using: :btree

  create_table "slides", force: :cascade do |t|
    t.string   "head",        limit: 255
    t.string   "description", limit: 255
    t.string   "image",       limit: 255
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.boolean  "active",      limit: 1,   default: false
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",        limit: 4
    t.integer  "taggable_id",   limit: 4
    t.string   "taggable_type", limit: 255
    t.integer  "tagger_id",     limit: 4
    t.string   "tagger_type",   limit: 255
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string  "name",           limit: 255
    t.integer "taggings_count", limit: 4,   default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "trademaks", force: :cascade do |t|
    t.string "name",     limit: 255
    t.string "name_url", limit: 255
  end

  create_table "users", force: :cascade do |t|
    t.string   "mail_address", limit: 255
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "username",     limit: 255
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
