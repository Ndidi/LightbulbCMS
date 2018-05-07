import React from "react";
import CMS from 'netlify-cms'
import "netlify-cms/dist/cms.css";

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('index', IndexPagePreview)